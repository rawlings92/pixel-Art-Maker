// Select color input
// Select size input
// When size is submitted by the user, call makeGrid()
$(function(){
	const height = $('#inputHeight').val();
	const weight = $('#inputWeight').val();
	makeGrid(height,weight);

	$('#sizePicker').submit(function(event){
		event.preventDefault();
		const height = $('#inputHeight').val();
		const weight = $('#inputWeight').val();
		const colorSelector= $('colorPicker'). val();
		makeGrid(height,weight);

	});
	$('table').on('click','.cells',function(){
		var currentColor=$('#colorPicker').val();
		$(this).css('background-color',currentColor);


	});
	function makeGrid(cellHeight,cellWidth){
		const table =$('#pixelCanvas').empty();
	
		var tableRow='';
		for (let i = 0;i <cellWidth; i++) {
			tableRow+='<tr>';
			for (let j=0; j<cellWidth;j++){
				tableRow+='<td class= "cells"></td>';
		}
		tableRow+='</tr>';
	}
	table.append(tableRow);

	}

});
function makeGrid() {

}




// Your code goes here!

