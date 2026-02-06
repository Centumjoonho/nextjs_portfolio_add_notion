const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcrypt');

const prisma = new PrismaClient();

async function main() {
  const username = process.env.ADMIN_SEED_USERNAME;
  const password = process.env.ADMIN_SEED_PASSWORD;

  if (!username || !password) {
    console.log('⚠️  ADMIN_SEED_USERNAME 또는 ADMIN_SEED_PASSWORD가 설정되지 않았습니다.');
    console.log('   Seed를 건너뜁니다.');
    return;
  }

  // 기존 계정 확인
  const existing = await prisma.adminUser.findUnique({
    where: { username },
  });

  if (existing) {
    console.log(`✅ 관리자 계정 "${username}"이 이미 존재합니다. Seed를 건너뜁니다.`);
    return;
  }

  // 비밀번호 해시 생성
  const passwordHash = await bcrypt.hash(password, 10);

  // 관리자 계정 생성
  const admin = await prisma.adminUser.create({
    data: {
      username,
      passwordHash,
      role: 'ADMIN',
    },
  });

  console.log(`✅ 관리자 계정이 생성되었습니다: ${admin.username} (ID: ${admin.id})`);
}

async function createDemoAccount() {
  const demoUsername = 'demo';
  
  // 기존 demo 계정 확인
  const existing = await prisma.adminUser.findUnique({
    where: { username: demoUsername },
  });

  if (existing) {
    console.log(`✅ 데모 계정 "${demoUsername}"이 이미 존재합니다.`);
    return;
  }

  // demo 계정 생성 (비밀번호는 사용하지 않지만 필수 필드이므로 더미 해시 사용)
  const dummyHash = await bcrypt.hash('demo', 10);
  
  const demo = await prisma.adminUser.create({
    data: {
      username: demoUsername,
      passwordHash: dummyHash,
      role: 'DEMO',
    },
  });

  console.log(`✅ 데모 계정이 생성되었습니다: ${demo.username} (ID: ${demo.id}, Role: ${demo.role})`);
}

async function main() {
  const username = process.env.ADMIN_SEED_USERNAME;
  const password = process.env.ADMIN_SEED_PASSWORD;

  // 관리자 계정 생성 (선택)
  if (username && password) {
    // 기존 계정 확인
    const existing = await prisma.adminUser.findUnique({
      where: { username },
    });

    if (existing) {
      console.log(`✅ 관리자 계정 "${username}"이 이미 존재합니다. Seed를 건너뜁니다.`);
    } else {
      // 비밀번호 해시 생성
      const passwordHash = await bcrypt.hash(password, 10);

      // 관리자 계정 생성
      const admin = await prisma.adminUser.create({
        data: {
          username,
          passwordHash,
          role: 'ADMIN',
        },
      });

      console.log(`✅ 관리자 계정이 생성되었습니다: ${admin.username} (ID: ${admin.id})`);
    }
  } else {
    console.log('⚠️  ADMIN_SEED_USERNAME 또는 ADMIN_SEED_PASSWORD가 설정되지 않았습니다.');
    console.log('   관리자 계정 생성을 건너뜁니다.');
  }

  // 데모 계정 생성 (항상 실행)
  await createDemoAccount();
}

main()
  .catch((e) => {
    console.error('❌ Seed 실행 중 오류:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
