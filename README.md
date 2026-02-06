This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

포트폴리오 사이트: https://portfolio-joonho.vercel.app

## 기능

- 포트폴리오 소개
- 프로젝트 목록 (Notion 연동)
- 코딩 개발 공부 게시판 (관리자 CRUD, 검색/필터, 마크다운 지원)

## Getting Started

### 1. 의존성 설치

```bash
npm install
```

### 2. 환경 변수 설정

`.env.local` 파일을 생성하고 다음 변수들을 설정하세요:

```env
# Notion API (기존)
NOTION_DATABASE_ID=your_notion_database_id
NOTION_TOKEN=your_notion_token

# Database (PostgreSQL)
DATABASE_URL="postgresql://user:password@localhost:5432/portfolio?schema=public"

# Admin Authentication
ADMIN_SESSION_SECRET=your_random_secret_key_for_session_signing_min_32_chars

# Admin Seed (초기 관리자 계정 생성용)
ADMIN_SEED_USERNAME=admin
ADMIN_SEED_PASSWORD=your_secure_password_here
```

**중요:**
- `ADMIN_SESSION_SECRET`: 세션 서명용 랜덤 문자열 (최소 32자 이상 권장)
  - 생성 방법: `openssl rand -base64 32` 또는 온라인 랜덤 문자열 생성기 사용
- `ADMIN_SEED_USERNAME`, `ADMIN_SEED_PASSWORD`: 초기 관리자 계정 생성용 (seed 실행 시 사용)

### 3. 데이터베이스 설정

#### 로컬 개발 (PostgreSQL)

1. PostgreSQL 설치 및 실행
2. 데이터베이스 생성:
   ```sql
   CREATE DATABASE portfolio;
   ```
3. Prisma 마이그레이션 실행:
   ```bash
   npx prisma migrate dev --name init
   ```
4. Prisma Client 생성:
   ```bash
   npm run prisma:generate
   ```
5. 초기 관리자 계정 생성:
   ```bash
   npm run seed
   ```
   - `.env.local`에 설정한 `ADMIN_SEED_USERNAME`과 `ADMIN_SEED_PASSWORD`로 계정이 생성됩니다.
   - 이미 동일한 username이 존재하면 seed는 건너뜁니다.

#### 배포 환경 (Vercel Postgres / Neon / Supabase)

1. Vercel Postgres, Neon, 또는 Supabase에서 데이터베이스 생성
2. 연결 URL을 `DATABASE_URL`에 설정
3. Vercel 배포 시 환경 변수 설정 (아래 참고)

### 4. 개발 서버 실행

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 코딩 테스트 게시판 사용법

### 관리자 로그인

1. 헤더의 "로그인" 버튼 클릭 또는 `/admin/login` 접속
2. 아이디와 비밀번호 입력 (seed로 생성한 계정 사용)
3. 로그인 성공 시 세션 쿠키가 발급되어 작성/수정/삭제 가능
4. 로그인 상태에서는 헤더에 "관리자" 뱃지와 "로그아웃" 버튼이 표시됩니다.

### 초기 관리자 계정 생성

1. `.env.local`에 다음 변수 설정:
   ```env
   ADMIN_SEED_USERNAME=admin
   ADMIN_SEED_PASSWORD=your_secure_password
   ```
2. Seed 실행:
   ```bash
   npm run seed
   ```
3. 생성된 계정으로 로그인:
   - 아이디: `ADMIN_SEED_USERNAME`에 설정한 값
   - 비밀번호: `ADMIN_SEED_PASSWORD`에 설정한 값

### 게시글 작성

1. 로그인 후 `/study/coding-test`에서 "새 글 작성" 클릭
2. 필수 필드: 제목, 플랫폼, 풀이(마크다운)
3. 선택 필드: 문제번호, 난이도, 태그, 요약, 코드, 회고
4. 태그는 쉼표로 구분하여 입력 (예: "DP, 그래프, 구현")

### 검색/필터

- 제목, 태그, 플랫폼 기준 검색
- 플랫폼/난이도 필터
- 페이지네이션 지원

## 배포 (Vercel)

### 1. 환경 변수 설정

Vercel 대시보드에서 다음 환경 변수를 설정:

- `NOTION_DATABASE_ID`
- `NOTION_TOKEN`
- `DATABASE_URL` (Vercel Postgres 사용 시 자동 생성되거나, Neon/Supabase 연결 URL)
- `ADMIN_SESSION_SECRET`
- `ADMIN_SEED_USERNAME` (초기 계정 생성용)
- `ADMIN_SEED_PASSWORD` (초기 계정 생성용)

### 2. 빌드 설정

Vercel은 자동으로 Next.js를 감지하지만, 빌드 전에 Prisma Client를 생성해야 합니다:

**Vercel Build Command (선택사항):**
```bash
npm run prisma:generate && npm run build
```

또는 `package.json`의 `postinstall` 스크립트 추가:
```json
"scripts": {
  "postinstall": "prisma generate"
}
```

### 3. 데이터베이스 마이그레이션

배포 후 첫 실행 시 데이터베이스 마이그레이션이 필요합니다:

**옵션 1: Vercel CLI 사용**
```bash
vercel env pull .env.local
npx prisma migrate deploy
```

**옵션 2: Vercel Postgres 사용 시**
- Vercel 대시보드에서 "Storage" > "Postgres" > "Query" 탭에서 직접 SQL 실행
- 또는 로컬에서 `DATABASE_URL`을 배포 환경으로 설정 후 마이그레이션

**초기 관리자 계정 생성:**
- 배포 환경에서도 seed를 실행하여 초기 계정 생성:
  ```bash
  # 로컬에서 DATABASE_URL을 배포 환경으로 설정 후
  npm run seed
  ```
- 또는 Vercel CLI를 사용하여 환경 변수를 가져온 후 실행

### 4. 체크리스트

배포 전 확인사항:

- [ ] 모든 환경 변수 설정 완료
- [ ] `DATABASE_URL` 정상 연결 확인
- [ ] Prisma 마이그레이션 완료
- [ ] 초기 관리자 계정 생성 (`npm run seed`)
- [ ] 관리자 로그인 테스트 (`/admin/login` 또는 헤더의 로그인 버튼)
- [ ] 게시글 작성/수정/삭제 테스트
- [ ] 검색/필터 기능 테스트
- [ ] 비로그인 사용자 접근 제어 확인
- [ ] 로그아웃 기능 테스트

## Prisma 명령어

```bash
# Prisma Client 생성
npm run prisma:generate

# 마이그레이션 생성 및 적용
npm run prisma:migrate

# Prisma Studio 실행 (DB GUI)
npm run prisma:studio
```

## 프로젝트 구조

```
├── components/          # React 컴포넌트
│   ├── header.js       # 헤더 (네비게이션)
│   └── ...
├── lib/                # 유틸리티
│   ├── prisma.js      # Prisma Client
│   └── auth.js        # 인증 유틸
├── pages/
│   ├── api/           # API Routes
│   │   ├── admin/    # 관리자 인증 API
│   │   └── posts/    # 게시판 CRUD API
│   ├── admin/         # 관리자 페이지
│   │   └── login.js   # 로그인
│   └── study/
│       └── coding-test/  # 게시판 페이지
│           ├── index.js      # 목록
│           ├── new.js        # 작성
│           ├── [slug].js     # 상세
│           └── [slug]/edit.js # 수정
└── prisma/
    └── schema.prisma  # Prisma 스키마
```

## 보안 주의사항

- `ADMIN_SESSION_SECRET`는 반드시 환경 변수로 관리
- 관리자 비밀번호는 bcrypt로 해시되어 저장됩니다 (평문 저장 금지)
- 프로덕션 환경에서는 `secure` 쿠키 사용 (HTTPS)
- 세션 만료 시간은 기본 7일 (필요 시 `lib/auth.js`에서 조정)
- `ADMIN_SEED_USERNAME`과 `ADMIN_SEED_PASSWORD`는 seed 실행 후에도 안전하게 보관 (추가 계정 생성 시 필요)

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [Prisma Documentation](https://www.prisma.io/docs) - learn about Prisma ORM.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!
