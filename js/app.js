class Emp {
	constructor({ id, name, dp, dob, desig }) {
		this.id = id;
		this.name = name;
		this.dp = dp;
		this.dob = dob;
		this.desig = desig;
		
		this.render();
	}
	render() {

		var $wrapper = $('<div/>', { class: `emp ${this.id}` }),
			$img = $('<img/>', { src: this.dp, alt: this.name }),
			$id = $('<h1/>').text(this.id),
			$name = $('<h2/>', {class: 'name'}).text(this.name),
			$desig = $('<h2/>').text(this.desig),
			$dob= $('<h3/>').text(this.dob);

		this.elem = $wrapper.append([$img, $id, $name, $desig, $dob]);
	}
	sayHi() {
		console.log(`Hello, my name is ${this.name}`);
	}
	tellDesig() {
		console.log(`My designation is ${this.desig}`);
	}
}


class Retail extends Emp{
	constructor({ id, name, dp, dob, desig, seatNo }) {
		super({ id, name, dp, dob, desig });
		this.seatNo = seatNo;

		this.reRender();
	}
	reRender() {
		console.log(this.elem);
		var $elem = this.elem,
			$name = $elem.find('.name');

		$elem.css({'background':'tomato'});
		$name.css({'font-weight': 600});
	}

}




raphael = new Retail({
	id: 1,
	name: 'Raphael',
	desig: 'consult',
	dp: 'http://www.endlessicons.com/wp-content/uploads/2012/12/male-avatar-icon-614x460.png',
	dob: '3rd May 1990',
	seatNo: 837
});

varun = new Emp({
	id: 2,
	name: 'Varun',
	desig: 'tecis',
	dp: 'http://www.endlessicons.com/wp-content/uploads/2012/12/male-avatar-icon-614x460.png',
	dob: '21rd July 1988'});
jagu = new Retail({
	id: 3,
	name: 'Jagadesh',
	desig: 'tecis',
	dp: 'http://www.endlessicons.com/wp-content/uploads/2012/12/male-avatar-icon-614x460.png',
	dob: '23rd November 1990'});


console.log(raphael);
$('.ece-container').append([raphael.elem, varun.elem, jagu.elem]);

raphael.sayHi();
raphael.tellDesig();
