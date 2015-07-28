<div class="swiper-container">
	<div class="swiper-wrapper">
		{{#each lists}}
		<div class="swiper-slide">
			<div class="content-block">
				<div class="q-title q-title-{{@index}}"></div>
				<ul class="list-content">
					<li><a href="#" class="link"><i class="icon icon-a">a</i><img src="{{this}}images/a_{{@index}}_a.png"></a></li>
					<li><a href="#" class="link"><i class="icon icon-b">b</i><img src="{{this}}images/a_{{@index}}_b.png"></a></li>
					<li><a href="#" class="link"><i class="icon icon-c">c</i><img src="{{this}}images/a_{{@index}}_c.png"></a></li>
					{{showLast @index}}
				</ul>
			</div>
		</div>
	    {{/each}}
	</div>
</div>