import { Component } from 'react'

class Profile extends Component {

	montoToStr = (num) => {
		return num > 12 || num < 1
			? null
			: 'январь,февраль,март,апрель,май,июнь,июль,август,сентябрь,октябрь,ноябрь,декабрь'.split(',')[
			num - 1
			];
	}
	render() {
		const { name, registredAt } = this.props
		const renderData = `${registredAt.getDate()} ${this.montoToStr(registredAt.getMonth())} ${registredAt.getFullYear()} `
		const renderName = name.split(' ')[0]

		return (
			<>
				<p>Привет, <b>{renderName}!</b></p>
				<p>Дата регистрации: {renderData}</p>
			</>
		)
	}
}
export default Profile