<template>
	<!-- 안내창 -->
	<div class="modal-wrap">
		<div class="modal-main">
			<h1>STX 건설 클론코딩</h1>
			<p>
				이 사이트는 <b>스터디용</b>으로 제작되었으며 리소스는 <strong>원저작자</strong>에게 있습니다. <br>
				해당 사이트 관련 문제 사항이 있으시면 연락해주시면 삭제하겠습니다. <br>
				본 사이트는 Chrome 에 최적화되어 있습니다.
			</p>
			<h2>수정사항</h2>
			<p class="modal-list">
				1. 16x16사이즈의 파비콘 적용하였습니다.<br>
				2. 동일한 marign,padding 적용하였습니다.<br>
			</p>
			<button class="modal-close">
				<i class="fas fa-times"></i>
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
		padding: 20px 0;
	}

	.modal-main p {
		text-align: center;
		font-size: 16px;
		font-weight: 300;
		color: #111;
		line-height: 1.8;
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
		padding: 20px 0;
	}

	.modal-main .modal-list {
		text-align: left;
		padding: 10px 80px;
	}

	.modal-close {
		position: absolute;
		right: 20px;
		top: 20px;
		border: 0;
		cursor: pointer;
		font-size: 25px;
		background: transparent;
		color: #999;
		transition: transform 0.5s;
	}

	.modal-close:hover {
		transform: rotate(180deg);
	}
</style>