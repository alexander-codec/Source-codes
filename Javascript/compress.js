function compress(num) {
    //pode colocar um aviso de comprimindo...
    var files = $("#file")[0].files;
    var listfile = files.length - 1;
    if(num <= listfile){
        var file = files[num];// aqui seria o nomero do arquivo se só tiver um arquivo no input file então é 0
		var canvas = document.getElementById('canvas');
		var ctx = canvas.getContext("2d");
		var image = new Image();
		image.onload = function() {
			ctx.canvas.width = image.width;
			ctx.canvas.height = image.height;
			ctx.drawImage(image, 0, 0,image.width,image.height);
			var compress = canvas.toDataURL('image/jpeg', 0.8);
            // variavel compress contem a imagem comprimida em base64
		};
        image.src = URL.createObjectURL(file);
    }
}