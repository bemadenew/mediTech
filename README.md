# mediTech — SilentWave 랜딩 페이지

코골이 케어 디바이스 SilentWave 소개용 정적 웹사이트입니다. 순수 HTML/CSS/JS로 만들어져 있어 별도 빌드 과정 없이 바로 배포할 수 있습니다.

## 파일 구성
```
index.html   메인 페이지
style.css    스타일
script.js    파형 애니메이션 + 상담 신청 폼 동작
```

## Vercel로 배포하기

### 방법 A — Vercel CLI (가장 빠름)
1. Node.js가 설치되어 있어야 합니다.
2. 터미널에서 이 폴더로 이동합니다.
3. 아래 명령어를 실행합니다.
   ```bash
   npm install -g vercel   # 처음 한 번만
   vercel login
   vercel                  # 질문에 답하면 미리보기 URL이 생성됩니다
   vercel --prod            # 실제 배포(프로덕션) URL 생성
   ```
4. 배포가 끝나면 `https://프로젝트명.vercel.app` 형태의 주소가 발급됩니다.

### 방법 B — GitHub 연동 (지속적으로 관리할 계획이라면 추천)
1. 이 폴더를 GitHub 저장소에 올립니다.
   ```bash
   git init
   git add .
   git commit -m "mediTech SilentWave landing page"
   git branch -M main
   git remote add origin <저장소 주소>
   git push -u origin main
   ```
2. [vercel.com](https://vercel.com) 에 로그인 후 "Add New → Project"를 선택합니다.
3. 방금 만든 GitHub 저장소를 선택하고 "Deploy"를 누릅니다. (Framework Preset은 "Other"로 두면 됩니다.)
4. 이후에는 `main` 브랜치에 푸시할 때마다 자동으로 재배포됩니다.

### 방법 C — 드래그 앤 드롭 (가장 간단)
1. [vercel.com/new](https://vercel.com/new) 접속 후 로그인
2. 이 폴더(`index.html`, `style.css`, `script.js`가 들어있는 폴더)를 그대로 업로드

## 배포 전에 꼭 확인/수정할 것
- **인증·임상 정보**: "신뢰성" 섹션의 인증 뱃지와 문구는 예시입니다. 실제 보유한 인증 번호·임상 결과로 교체하세요.
- **제품 사양 수치**: 반응 속도, 사용 시간 등은 예시 수치입니다(각주 표시됨). 실제 검증된 값으로 바꿔주세요.
- **회사 정보**: 하단 푸터의 대표자명, 사업자등록번호, 주소, 연락처를 실제 정보로 변경하세요.
- **상담 신청 폼**: 현재는 프론트엔드에서만 완료 메시지를 보여주는 placeholder입니다. 실제 문의를 받으려면 이메일 전송 API, CRM 연동, 또는 Vercel Serverless Function 등을 연결해야 합니다.
- **의료기기 광고 관련 문구**: 의료기기법상 과장·오인 소지가 있는 표현은 제한될 수 있으니, 배포 전 관련 법규(의료기기법, 표시광고법 등) 검토를 권장합니다.
