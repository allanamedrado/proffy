import React from 'react';
import './style.css';
import whatsappIcon from '../../assets/icons/whatsapp.svg';

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars1.githubusercontent.com/u/54155356?s=460&u=87d2b632afe93294f42a8c64cd96859afc3974db&v=4" alt="Allana Araujo" />
                <div>
                    <strong>Allana Araujo</strong>
                    <span>Química</span>
                </div>
            </header>

            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit ex explicabo voluptates temporibus quis adipisci odit, illo obcaecati molestiae voluptatum sed ab esse numquam quibusdam hic incidunt praesentium vitae perspiciatis.

                    </p>

            <footer>
                <p>
                    Preço/hora
                            <strong>R$ 20,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp" />
                            Entrar em contato
                        </button>
            </footer>
        </article>
    );
}

export default TeacherItem;