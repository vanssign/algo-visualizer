export function getSelectionSortAnimations(array) {
    let animations = [];
    let helperArray = array.slice();
    selectionSort(helperArray, animations);
    return animations;
  }

  function selectionSort(helperArray,animations) {
	var length = helperArray.length;
	for (var i = 0; i < length - 1; i++) {
		//Number of passes
		var min = i;
		//min holds the current minimum number position for each pass; i holds the Initial min number
		for (var j = i + 1; j < length; j++) {
			animations.push(["comparision1",j,min]);
			animations.push(["comparision2",j,min]); //Note that j = i + 1 as we only need to go through unsorted array
			if (helperArray[j] < helperArray[min]) { //Compare the numbers
				animations.push(["overwrite", min, j]);
				min = j; 
			
                
                    //Change the current min number position if a smaller num is found
			}
		}
		if (min != i) {
			//After each pass, if the current min num != initial min num, exchange the position.
			//Swap the numbers 
			animations.push(["swap", i, helperArray[min]]);
			animations.push(["swap", min, helperArray[i]]);
			var tmp = helperArray[i];
			helperArray[i] = helperArray[min];
			helperArray[min] = tmp;
		}
	}
}
  
//   function sellectionSort(helperArray, animations) {
//     const length = helperArray.length;
//     for (let i = 1; i < length; i++) {
//       let position = helperArray[i];
//       let j = i - 1;
//       animations.push(["comparison1", j, i]);
//       animations.push(["comparison2", j, i]);
//       while (j >= 0 && helperArray[j] > position) {
//         animations.push(["overwrite", j + 1, helperArray[j]]);
//         helperArray[j + 1] = helperArray[j];
//         j = j - 1;
//         if (j >= 0) {
//           animations.push(["comparison1", j, i]);
//           animations.push(["comparison2", j, i]);
//         }
//       }
//       animations.push(["overwrite", j + 1, position]);
//       helperArray[j + 1] = position;
//     }
//   }