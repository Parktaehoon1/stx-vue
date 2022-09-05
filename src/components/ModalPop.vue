<template>
	<!-- 안내창 -->
<!-- 안내창 -->
	<div class="modal-wrap">
		<div class="modal-main">
			<img src="@/assets/images/free-icon-warning-752755.png" alt="경고아이콘" class="modal-warning">
			<h1>STX 클론코딩</h1>
			<p class="modal-desc">
				이 사이트는 <span class="checkfont">스터디용</span>으로 제작되었으며 리소스는 <span class="checkfont">원저작자</span>에게 있습니다.
				<br>
				해당 사이트 관련 문제 사항이 있으시면 연락해주시면 삭제하겠습니다.
			</p>
			<p class="modal-chrome">본 사이트는 <span class="checkfont">Chrome</span> 에 최적화되어 있습니다.</p>
			<button class="modal-close">
				<!-- <i class="fas fa-times"></i> -->
				CLOSE
			</button>
		</div>
	</div>

</template>

<script>
	import {
		onMounted
	} from 'vue';
	import $ from 'jquery';
	export default {

		setup() {
			onMounted(() => {
				$('html').css('overflow', 'hidden');

				let modalWrap = $('.modal-wrap');
				let modalClose = $('.modal-close');

				modalClose.click(function () {
					modalWrap.stop().fadeOut(500)
					// 추가기능 : 스크롤바 살리기
					$('html').css('overflow', 'auto');
				});
				let modalMain = $('.modal-main')
				//내용 배경 클릭
				modalMain.click(function (event) {
					// 클릭 정보 전달 막기
					event.stopPropagation();
				});
				//전체 배경 클릭
				modalWrap.click(function () {
					modalWrap.stop().fadeOut(500)
					// 추가기능 : 스크롤바 살리기
					$('html').css('overflow', 'auto');
				});

			})
			return {

			}
		}
	}
</script>

<style>
	/* 안내창 */
	.modal-wrap {
	position: fixed;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, 0.7);
	z-index: 99999;
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

.modal-main {
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
	width: 600px;
	height: 400px;
	background-color: #fff;
	border-radius: 8px;
	padding: 10px;
	box-shadow: 0px 0px 15px 0 rgb(0 0 0 / 70%);
	border: 5px solid rgba(0, 0, 0, 0.1);
}

.modal-main h1 {
	font-size: 30px;
	font-weight: 600;
	text-align: center;
	color: #000;
	padding: 10px 0;
}

.modal-desc{
	text-align: center;
	font-size: 16px;
	font-weight: 300;
	color: #111;
	line-height: 1.8;
	padding: 50px 0;
}

.modal-main b {
	font-weight: 600;
	text-decoration: underline;
	color: #ed1c24;
}

.modal-main strong {
	font-weight: 600;
	text-decoration: underline;
	color: #ed1c24;
}

.modal-main h2 {
	font-size: 20px;
	font-weight: 600;
	text-align: center;
	color: #000;
	padding: 10px 0;
}

.modal-main .modal-list {
	text-align: left;
	padding: 0 80px;
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

.modal-close {
	position: absolute;
	left: 50%;
	bottom: 40px;
	transform: translateX(-50%);
	display: block;
	width: 200px;
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
	box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.3)
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

.checkfont {
	font-weight: 600;
	text-decoration: underline;
	color: #ed1c24;
}

</style>