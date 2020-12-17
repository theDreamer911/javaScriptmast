function sorting(arrys) {
  //   let tool = ["ben", "luke", " ", "dan", "aaaaa"];
  //   a = tool[0].length;
  //   console.log(a);
  //   b = tool[1].length;
  //   console.log(b);
  //   c = tool[2].length;
  //   console.log(c);
  //   d = tool[3].length;
  //   console.log(d);
  //   e = tool[4].length;
  //   console.log(e);
  //   let news = new Array(a, b, c, d, e);
  //   zz = news.sort();
  //   console.log(zz);
  //   console.log(tool.sort(length));
  //   tool[0] = a;
  //   tool[1] = b;
  //   tool[2] = c;
  //   tool[3] = d;
  //   tool[4] = e;
  //   let vars = new Array(tool);
  //   console.log(vars);
  //   let i = 0;
  //   let text = "";
  //   let bon = tool.length;
  //   console.log(bon);
  //   while (tool[i]) {
  //     text += `${tool[i].length} && ${tool[i]}\n`;
  //     i++;
  //   }
  //   console.log(text);
  //   text2 = text.sort;
  //   console.log(i);
  //   console.log(first);
  //   return first;

  let tool = ["ben", "luke", " ", "dan", "aaaaa"];

  tool.sort((a, b) => b.length - a.length);

  console.log(tool);
}

sorting();
