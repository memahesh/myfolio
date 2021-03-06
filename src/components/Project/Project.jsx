import React, {useState} from 'react';
import { Container, Row, Col } from 'reactstrap';
import './Project.css';
import '../common.css';

const Project = (props) => {
	

	const data = props.data;

	const imgUrl = 'assets/images/'+data.icon+'.png';

	return (
		<Row id={ props.id } className="small-wrapper">
			<Col md={{ size: 3 }} className="center-div" >
				<a href={ data.url } target="_blank">
					<img src={ imgUrl } alt={ data.icon } className="logo-img" />
				</a>
			</Col>
			<Col md={{ size: 9 }}>
				<h3>{ data.name }</h3>
				<span className="text-muted">
					{ data.duration }
				</span>
				<p>{ data.description }</p>

				{Object.keys(data.links).map(ele =>{
					return <span key={ele}>
								<a href={data.links[ele]} target="_blank"> {ele} </a> / 
							</span>;
				})}
			</Col>
		</Row>
	);
}

export default Project;