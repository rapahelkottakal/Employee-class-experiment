requirejs.config({
    baseUrl: 'js',
});
requirejs(['jquery.min','jquery-ui.min','Classes/Emp','Classes/Publisher'], function() {
	console.log('Scripts loaded');

    $( "#datepicker" ).datepicker();





	raphael = new Publisher({
		id: 1,
		name: 'Raphael',
		desig: 'consult',
		dp: 'http://www.endlessicons.com/wp-content/uploads/2012/12/male-avatar-icon-614x460.png',
		dob: '03/23/2016',
		seatNo: 837
	});

	varun = new Publisher({
		id: 2,
		name: 'Varun',
		desig: 'tecis',
		dp: 'http://www.endlessicons.com/wp-content/uploads/2012/12/male-avatar-icon-614x460.png',
		dob: '03/23/2016'});
	jagu = new Publisher({
		id: 3,
		name: 'Jagadesh',
		desig: 'tecis',
		dp: 'http://www.endlessicons.com/wp-content/uploads/2012/12/male-avatar-icon-614x460.png',
		dob: '23rd November 1990'});
	sample1 = new Publisher({
		id: 3,
		name: 'sample1',
		desig: 'tecis',
		dp: 'http://www.endlessicons.com/wp-content/uploads/2012/12/male-avatar-icon-614x460.png',
		dob: '03/23/2016'});
	sample2 = new Publisher({
		id: 3,
		name: 'sample2',
		desig: 'tecis',
		dp: 'http://www.endlessicons.com/wp-content/uploads/2012/12/male-avatar-icon-614x460.png',
		dob: '03/23/2016'});

	$('.ece-container').append([raphael.elem, varun.elem, jagu.elem, sample1.elem, sample2.elem]);
});