var area_len = document.region.area.options.length;
//var area_len = $$('#redirecSelect option').length();
window.building = new Array(area_len);

for (i=0; i<area_len; i++){
    building[i] = new Array();
}
//定义基本选项
building[0][0] = new Option("请选择", " ");

building[1][0] = new Option("凯晨世贸中心", "1");
building[1][1] = new Option("朗琴国际", "2");
building[1][2] = new Option("西环广场", "3");
building[1][3] = new Option("富卓大厦", "4");
building[1][4] = new Option("通泰大厦", "5");
building[1][5] = new Option("东润时代大厦", "6");
building[1][6] = new Option("平安大厦", "7");
building[1][7] = new Option("金隅大厦", "8");
building[1][8] = new Option("大成大厦", "9");
building[1][9] = new Option("建威大厦", "10");
building[1][10] = new Option("中商大厦", "11");
building[1][11] = new Option("天银大厦", "12");
building[1][12] = new Option("天恒置业大厦", "13");
building[1][13] = new Option("凯旋大厦", "14");
building[1][14] = new Option("北环中心", "15");
building[1][15] = new Option("国润大厦", "16");
building[1][16] = new Option("茅台大厦", "17");
building[1][17] = new Option("金融街中心", "18");
building[1][18] = new Option("京润大厦", "19");
building[1][19] = new Option("新盛大厦", "20");
building[1][20] = new Option("西单国际大厦", "21");
building[1][21] = new Option("恒奥中心", "22");
building[1][22] = new Option("环球财讯中心", "23");
building[1][23] = new Option("投资广场", "24");
building[1][24] = new Option("万通新世界广场", "25");
building[1][25] = new Option("富凯大厦", "26");
building[1][26] = new Option("伦洋大厦", "27");
building[1][27] = new Option("中化大厦", "28");
// ........

building[2][0] = new Option("新东安广场", "29");
building[2][1] = new Option("新世界中心", "29");