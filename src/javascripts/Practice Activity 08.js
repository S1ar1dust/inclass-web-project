let row = 1
let column = 2

for (row; row <= 12; row++) {
    document.write('<div style="margin: 0;"></div>');

    if (row == 1) {
        document.write('<div style="margon: 0; width: 2%; padding:4px 4% 4px 2px; border: 1px solid black; display: inline-block;">' + row + '</div>');
    } else {
        document.write('<div style="margon: 0; width: 2%; padding:4px 4% 4px 2px;  border-left: 1px solid black; border-bottom: 1px solid black; border-right: 1px solid black; display: inline-block;">' + row + '</div>');
    } /* End of else*/

    for (column; column <= 12; column++) {
        if (row == 1) {
            document.write('<div style=" width: 2%; padding:4px 4% 4px 2px; border-top: 1px solid black; border-bottom: 1px solid black; border-right: 1px solid black; display: inline-block;">' + row*column + '</div>')
        } else {
            document.write('<div style=" width: 2%; padding:4px 4% 4px 2px; border-bottom: 1px solid black; border-right: 1px solid black; display: inline-block;">' + row*column + '</div>')
        }/* End of else*/
    }/* End of for*/
    column = 2
}/* End of for*/
