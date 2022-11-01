<?php
    $to = "79122070001@yandex.ru";
		$tema = "Заявка с сайта AutoShop";
		$message .= 'Заявка <br>';
		$message .= "Имя: ".$_POST['name']."<br>";
		$message .= "E-mail: ".$_POST['email']."<br>";
		$message .= "Номер телефона: ".$_POST['phone']."<br>";
		$message .= "В лизинг: ".$_POST['checkbox1']."<br>";
		$message .= "Физическое лицо: ".$_POST['radioform']."<br>";
		$message .= "Физ/Юр лицо: ".$_POST['radioform']."<br>";
		$headers .= 'MIME-Version: 1.0' . "\r\n";
		$headers .= 'Content-type: text/html; charset=utf-8' . "\r\n";
		mail($to, $tema, $message, $headers);

		$content = '
		<div class="container fix-widht p-0 mt-30 mb-30">
			<div class="row m-0">
				<div class="col-lg-12 col-fix-widht">
					<div class="grateful-box">
						<div class="grateful-logo">
							<img src="./src/media/img/logo-max.svg" alt="">
						</div>
						<div class="grateful-tittle">Заявка отправлена</div>
						<div class="grateful-subtittle">Наш специалист свяжется с вами</div>
						<a class="grateful-gohome" href="./index.html">Вернуться на главную</a>
					</div>
				</div>
			</div>
		</div>

		<style>
		.grateful-box {
			display: flex;
			justify-content: center;
			flex-wrap: wrap;
			width: 100%;
			padding: 40px;
			background: #444444;
			box-shadow: 0px 6px 40px 1px rgb(0 0 0 / 6%);
			border-radius: 21px;
		}
		.grateful-logo {
			width: 100%;
			display: flex;
			justify-content: center;
		}
		.grateful-logo img {
			width: 150px;
		}
		.grateful-tittle {
			width: 100%;
			display: flex;
			justify-content: center;
			text-align: center;
			margin-top: 100px;
			font-size: 30px;
			font-weight: 500;
			color: #f4f4f4;
		}
		.grateful-subtittle {
			width: 100%;
			display: flex;
			justify-content: center;
			text-align: center;
			margin-top: 30px;
			font-size: 18px;
			font-weight: 300;
			color: #f4f4f4;
		}
		.grateful-gohome {
			margin-top: 100px;
			text-align: center;
			padding: 18px 34px;
			background: #FF574D;
			box-shadow: 1px 4px 14px rgb(0 0 0 / 13%);
			border-radius: 6px;
			color: #F4F4F4;
		}
		.grateful-gohome:hover {
			color: #F4F4F4;
			text-decoration: none;
		}
		</style>';

	 echo $content;
?>
