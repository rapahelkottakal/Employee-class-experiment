
raphael = new Publisher({
	id: 1,
	name: 'Raphael',
	desig: 'consult',
	dp: 'http://www.endlessicons.com/wp-content/uploads/2012/12/male-avatar-icon-614x460.png',
	dob: '3rd May 1990',
	seatNo: 837
});

varun = new Publisher({
	id: 2,
	name: 'Varun',
	desig: 'tecis',
	dp: 'http://www.endlessicons.com/wp-content/uploads/2012/12/male-avatar-icon-614x460.png',
	dob: '21rd July 1988'});
jagu = new Publisher({
	id: 3,
	name: 'Jagadesh',
	desig: 'tecis',
	dp: 'http://www.endlessicons.com/wp-content/uploads/2012/12/male-avatar-icon-614x460.png',
	dob: '23rd November 1990'});


console.log(raphael);
$('.ece-container').append([raphael.elem, varun.elem, jagu.elem]);