/* address-book.js
    this is where you will add your JavaScript to complete Lab 5
*/


/* sortObjArray()
    sorts an array of objects by a given property name
    the property values are compared using standard 
    operators, so this will work for string, numeric,
    boolean, or date values

    objArray        array of objects to sort
    propName        property name to sort by

    returns undefined (array is sorted in place)
*/
function sortObjArray(objArray, propName) {
    if (!objArray.sort)
        throw new Error('The objArray parameter does not seem to be an array (no sort method)');

    //sort the array supplying a custom compare function
    objArray.sort(function(a,b) {
        
        //note: this compares only one property of the objects
        //see the optional step where you can add support for 
        //a secondary sort key (i.e., sort by another property)
        //if the first property values are equal
        if (a[propName] < b[propName])
            return -1;
        else if (a[propName] === b[propName])
            return 0;
        else
            return 1;
    });
} //sortObjArray()



$(function() {
  // Document is ready

  $.sortObjArray('.last');
  render(entries, $('.template'), $('.Employees'));

  $('.name').click(function(){
        topSongs.sort(function(a,b){
            return a.last.localeCompare(b.artist);
        });
        render(entries, $('.template'), $('.Employees'));
    });

  $('.title').click(function(){
        topSongs.sort(function(a,b){
            return a.title.localeCompare(b.artist);
        });
        render(entries, $('.template'), $('.Employees'));
    });

  $('.dept').click(function(){
        topSongs.sort(function(a,b){
            return a.dept.localeCompare(b.artist);
        });
        render(entries, $('.template'), $('.Employees'));
    });

  if(this.active != true) {
      this.active.removeClass();
  } else {
    this.active.addClass();
  }

});


function render(entries, template, container){
    var instance;
    container.empty();
    $.each(entries, function()) {
        return instance = template.clone();
        instance.find('.first').html(this.first);
        instance.find('.last').html(this.last);
        instance.find('.title').html(this.title);
        instance.find('.dept').html(this.dept);
        instance.find('.pic').attr({
            src: this.pic,
            alt: 'Picture of ' + this.first + this.last
        });

    }
    

    instance.removeClass('template');
    container.append(instance);

}

