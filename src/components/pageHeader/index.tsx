import React from 'react';
import backIcon from '../../assets/icons/back.svg';
import logo from '../../assets/logo.svg';
import { Link } from 'react-router-dom';
import './style.css'

interface PageHeaderProps {
    title: string;
}

const PageHeader: React.FC<PageHeaderProps> = (props) => {
    return (
        <header className="page-header">
                <div className="top-bar-container">
                    <Link to="/">
                        <img src={backIcon} alt="Voltar"/>
                    </Link>
                    <img src={logo} alt="Proffy"/>
                </div>
                <div className="header-content">
                    <strong> {props.title} </strong>
                    {props.children}
                </div>

    
        </header>
    );
}

export default PageHeader;