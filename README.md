# 먹고싶은 메뉴 공유 어플 <밥묵자>

</br>


## 개요
- 일상속에서 반복되는 점심이나 저녁메뉴 선택에 고통을 겪고있는 현대인들을 위하여 먹고싶은것이 있을때
  바로바로 메뉴를 메모하거나 맛집을 선택하여 친구끼리 공유할 수 있는 어플
- 대상 : 주기적으로 매일만나거나 만나야만 하는 그룹 (직장인,가족,커플,동아리)
- 기능요구사항 : 로그인 기능, 친구 검색기능, 친구추가 기능, 그룹만들기기능, 메뉴나 맛집 기록기능, 메뉴에 공감을 할수 있는 기능 -> 추후에 메뉴나 장소 선택시 해당건에 대한 자세한 사항이 사용자에게 표시될 수 있도록

</br>
## GUI : 로그인 페이지<회원가입페이지>, 친구 목록페이지<친구검색페이지>, 그룹목록 페이지<그룹추가 페이지>
- 로그인 페이지 : Id 입력칸, Password 입력칸, 회원가입 버튼
- 회원가입 페이지 : 번호입력칸, 이름입력칸, 생년월일, 아이디 중복확인 버튼, 본인인증 확인 버튼
- 친구목록 페이지 : 친구목록 표시, 친구검색버튼 - 핸드폰번호로 검색, 친구요청 수락기능
- 친구검색 페이지 : 핸드폰 번호 입력칸
- 그룹목록 페이지. : 그룹목록 표시, 그룹추가 버튼
- 그룹추가 페이지 : 모임이름 설정 -> 친구목록에서 추가
- 그룹별 페이지 : 추가한 메뉴 및 맛집목록 표시, 메뉴나 맛집 추가버튼, 생성된 목록에 대해 공감을 누를수 있는 버튼
<img width="380" alt="스크린샷 2023-05-29 오후 1 28 26" src="https://github.com/theoldtree/BapMukJa/assets/40632826/87b06a0a-967d-4ab8-8321-0be1ead1b433">
<img width="384" alt="스크린샷 2023-05-29 오후 1 27 43" src="https://github.com/theoldtree/BapMukJa/assets/40632826/c4b5d6de-b1c9-4161-b232-3fd6a1c75605">
<img width="380" alt="스크린샷 2023-05-29 오후 1 28 43" src="https://github.com/theoldtree/BapMukJa/assets/40632826/414be635-1fad-4310-aa04-38df3b6238d8">
<img width="382" alt="스크린샷 2023-05-29 오후 1 29 33" src="https://github.com/theoldtree/BapMukJa/assets/40632826/4424268e-0e1a-4898-8114-350d9fd1dac1">
<img width="379" alt="스크린샷 2023-05-29 오후 1 29 53" src="https://github.com/theoldtree/BapMukJa/assets/40632826/d09ac7fd-1926-4844-a3b5-27089155c8e4">
<img width="380" alt="스크린샷 2023-05-29 오후 1 30 27" src="https://github.com/theoldtree/BapMukJa/assets/40632826/71574ce5-75d1-43d4-b244-03d8d4110a00">
<img width="379" alt="스크린샷 2023-05-29 오후 1 30 52" src="https://github.com/theoldtree/BapMukJa/assets/40632826/71af377f-4dbf-48cd-bd11-7e701f730249">


</br>
### 기술스택
- React Naitve
- Goolge Firebase auth, firestore
