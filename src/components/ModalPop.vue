<template>
  <!-- 모달창 -->
  <div class="modal-wrap">
    <div class="modal-main">
      <div class="modal-up">
        <span class="btn1"></span>
        <span class="btn2"></span>
        <span class="btn3"></span>
      </div>
      <div class="modal-bottom">
        <h1>STX건설 클론코딩</h1>
        <p class="modal-desc">
          이 사이트는 <span class="checkfont">스터디용</span>으로 제작되었으며
          리소스는 <span class="checkfont">원저작자</span>에게 있습니다.
          <br />
          해당 사이트 관련 문제 사항이 있으시면 연락해주시면 삭제하겠습니다.
        </p>

        <p class="modal-chrome">
          본 사이트는 <span class="checkfont">Chrome</span> 에 최적화되어
          있습니다.😊
        </p>
        <button class="modal-close">
          <!-- <i class="fas fa-times"></i> -->
          CLOSE
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
import { onMounted } from "vue";
export default {
  setup() {
    onMounted(() => {
      // 모달창
      let modalWrap = $(".modal-wrap");
      let modalClose = $(".modal-close");

      modalClose.click(function () {
        modalWrap.stop().fadeOut(500);
        // 추가기능 : 스크롤바 살리기
        // $('html').css('overflow', 'auto');
      });
      let modalMain = $(".modal-main");
      //내용 배경 클릭
      modalMain.click(function (event) {
        // 클릭 정보 전달 막기
        event.stopPropagation();
      });
      //전체 배경 클릭
      modalWrap.click(function () {
        modalWrap.stop().fadeOut(500);
        // 추가기능 : 스크롤바 살리기
        // $('html').css('overflow', 'auto');
      });
      $("html").keydown(function (key) {
        if (key.keyCode == 13) {
          modalWrap.stop().fadeOut(200);
          $("html").css("overflow", "auto");
        }
      });
    });
    return {};
  },
};
</script>

<style scoped>
/* 모달창 */
.modal-wrap {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  z-index: 99999;
}

.modal-main {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 600px;
  height: 400px;
  background-color: #fff;
  border-radius: 10px;
}

.modal-up {
  position: relative;
  display: flex;
  width: 100%;
  height: 8%;
  padding: 0 10px;
  align-items: center;
  /* background-color: #f5f3f7; */
  background: linear-gradient(360deg, #f5f3f7 10%, #e9e9e9 360%);
  border-radius: 8px 8px 0 0;
}
.modal-up span {
  margin-left: 5px;
}
.btn1 {
  position: relative;
  display: inline-block;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background-color: rgb(216, 17, 17);
}
.btn2 {
  position: relative;
  display: inline-block;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background-color: orange;
}
.btn3 {
  position: relative;
  display: inline-block;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background-color: greenyellow;
}

.modal-bottom {
  position: relative;
  display: block;
  height: 90%;
  background-color: #ffffff;
}

.modal-main h1 {
  position: absolute;
  left: 0;
  top: 0;
  display: block;
  width: 100%;
  font-size: 30px;
  font-weight: 600;
  text-align: center;
  color: #333;
  padding: 20px 0;
}

.modal-desc {
  position: absolute;
  left: 50%;
  top: 40%;
  display: block;
  width: 100%;
  transform: translate(-50%, -50%);
  text-align: center;
  font-size: 16px;
  font-weight: 600;
  color: #333;
  line-height: 1.8;
}

.modal-study {
  position: absolute;
  left: 50%;
  top: 45%;
  display: block;
  width: 75%;
  margin: 0 auto;
  transform: translate(-50%, -50%);
  text-align: left;
  font-size: 15px;
  font-weight: 400;
  color: #111;
  line-height: 1.8;
}

.modal-chrome {
  position: absolute;
  left: 50%;
  top: 60%;
  display: block;
  width: 100%;
  transform: translate(-50%, -50%);
  text-align: center;
  font-size: 15px;
  font-weight: 500;
  color: #111;
  line-height: 1.8;
}

.checkfont {
  font-weight: 600;
  text-decoration: underline;
  color: #ed1c24;
}

.modal-main h2 {
  font-size: 20px;
  font-weight: 600;
  text-align: center;
  color: #000;
  padding: 20px 0;
}

.modal-main .modal-list {
  text-align: left;
  padding: 10px 80px;
}

.modal-close {
  position: absolute;
  left: 50%;
  bottom: 30px;
  transform: translateX(-50%);
  display: block;
  width: 150px;
  padding: 5px 10px;
  border: 1px solid #000;
  cursor: pointer;
  font-size: 25px;
  background: transparent;
  color: #000;
  border-radius: 5px;
  transition: all 0.5s;
}

.modal-close:hover {
  color: red;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.3);
}

.modal-warning {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 200px;
  height: 200px;
  color: red;
  opacity: 0.3;
  z-index: -9;
}
</style>
