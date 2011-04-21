/**
 * Created by .
 * User: gez
 * Date: 4/20/11
 * Time: 7:29 PM
 * To change this template use File | Settings | File Templates.
 */

$(document).ready(function() {
                var canvas = document.getElementById("myCanvas");
                var ctx = canvas.getContext("2d");
  ctx.fillRect(0, 0, 100, 100);
      ctx.save();
    ctx.translate(100, 100);
    ctx.fillStyle = "rgb(0, 0, 255)";
    ctx.fillRect(0, 0, 100, 100);
    ctx.restore();
            });

