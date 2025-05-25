<h1 align="center">Coworkers</h1>
<p align="center">Coworkers은 업무 배정과 현황 공유를 위한 서비스입니다.</p>

<div style="text-align: center;">
  <a href="https://coworkers-ruddy.vercel.app/">
    <img alt="Coworkers" src='' width="auto" height="auto">
  </a>
</div>
<p style="text-align: center;">
- 개발 기간 : 25.04.16 ~ 25.05.26<br>
- 리팩토링 :
</p>

#  Cowokers는?
[Coworkers]은 업무 배정과 현황 공유를 위한 서비스입니다.
실제 업무 프로세스에 최적화된 To-do 리스트 형태로 업무를 생성하고 공유할 수 있으며, 성과 지표를 시각적으로 확인할 수 있는 기능을 제공합니다. 일관된 UI/UX를 바탕으로 달력, 팝오버, 모달 등 다양한 UI 컴포넌트를 활용하며, 반응형 디자인을 적용해 다양한 기기에서도 최적의 사용성을 보장합니다. 외부 패키지를 적절히 조정하여 사용자 친화적인 인터페이스를 구축함으로써 더욱 편리한 서비스를 제공합니다.



# Team

### 임용균

### 박수연

### 이성준

### 김교연

### 박재현

1. **공통 컴포넌트**



2. **페이지**



3. **기타 기여 사항**



# Skill Stacks


## Environment



## Development



## Libraries



# Package Structure

```
src/
├── app/                              # Next.js App Router 루트
│   ├── (pages)/                      # 실제 화면 라우트 그룹
│   │   ├── (auth)/                   # 인증 관련 라우트
│   │   │   ├── invite/                # 팀페이지 초대 수락 페이지
│   │   │   ├── login/                # 로그인 페이지
│   │   │   ├── reset-password/   # 비밀번호 재설정 페이지
│   │   │   ├── signup/               # 회원가입 페이지
│   │   │   │── addteam/              # 팀 생성 페이지
│   │   │   └── layout.tsx            # 인증 관련 페이지 공통 레이아웃
│   │   ├── (main)/                   # 로그인 후 메인 기능 페이지
│   │   │   ├── [teamid]/             # 팀별 대시보드
│   │   │   │   ├── tasklist/         # 할 일 목록
│   │   │   │   └── edit/             # 팀 대시보드 수정 페이지
│   │   │   ├── addteam/            # 팀 생성하기 페이지
│   │   │   ├── boards/               # 자유게시판
│   │   │   ├── join/                    # 팀 참여하기 페이지
│   │   │   ├── myhistory/         # 내가 완료한 할 일 목록 페이지
│   │   │   ├── mypage/               # 계정 설정 페이지
│   │   │   └── noteam/               # 팀 없는 경우 안내 페이지
│   │   └── layout.tsx                    # 페이지 공통 레이아웃
│   └── layout.tsx                    # 공통 레이아웃 (루트)
│
├── components/                       # 재사용 UI 컴포넌트
│   ├── common/                       # 버튼, 모달 등 공통 요소
│   ├── layout/                       # 헤더, 사이드바 등
│   └── ...                                 # 페이지 특화 컴포넌트 등
│
├── constants/
├── context/
├── hooks/
├── lib/
├── stores/
├── styles/
├── utils/
└── utils/
```

# Installation

1. Clone the repository

```bash
git clone https://github.com/FE13-part4-team4
```

2. Install dependencies

```bash
npm install
```

3. Start the development server

```bash
npm start dev
npm run dev
```

4. Open the project in your browser

```bash
http://localhost:3000
```
