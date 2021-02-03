document.getElementById("hellocontainer")!.innerText = "hello world";


interface square{
    heigth : number;
    length : number;
 }

 function draw(figure: square) {
    var canvas: HTMLCanvasElement | null = document.querySelector('#myCanvas');
    var ctx = canvas?.getContext("2d");
    ctx?.beginPath();    
    ctx?.rect(0, 0, figure.heigth, figure.length);
    ctx?.stroke();
 }

    document.querySelector('#drawSquare')?.addEventListener('click', () =>{
    let inputHeigth: HTMLInputElement | null = document.querySelector('#squareHeigth')
    let inputLength: HTMLInputElement | null = document.querySelector('#squareLength')
    if(!inputHeigth?.value || !inputLength?.value) return
    let mySquare: square = {heigth: Number(inputHeigth.value), length: Number(inputLength.value)};
    draw(mySquare);
})
 