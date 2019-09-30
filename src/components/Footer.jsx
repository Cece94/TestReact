import React from 'react';
import './Footer.scss';
import Button from 'react-bootstrap/Button';

class Footer extends React.Component {

    render(){
        return(
            <div className="footer"> 
                <div className="catchphrase">
                    <span className="catchphrase-small">comment bénéficier de l'offre</span>
                    <span className="catchphrase-bold">150€ de réduction* Dès 1000€ d'achat</span>
                    <div className="diviser"></div>
                </div>
                <div className="member">
                    <span className="member-bold">Déjà membre ?</span>
                    <span className="member-small">votre code promo vous attend directement sur le site <a>en cliquant ici</a></span>
                </div>
                <div className="subscription">
                    <div>
                        <div className="step">
                            <div>1</div>
                            <div className="step-detail">
                                <span>Rejoignez</span>
                                <span>Emirates | The list</span>
                            </div>
                        </div>
                        <div className="step">
                            <div>2</div>
                            <div className="step-detail">
                                <span>Recevez par email</span>
                                <span>votre bon de 150€ offert</span>
                                <span>à utiliser dès 1000€ d'achat</span>
                            </div>
                        </div>
                        <div className="step">
                            <div>3</div>
                            <div className="step-detail">
                                <span>Réservez votre séjour</span>
                                <span>avant le 30 avril 2019</span>
                            </div>
                        </div>
                    </div>
                    <div className="subscription-button">
                        <Button type="default">JE M'INSCRIS</Button>
                    </div>
                </div>
            </div>
        )
    }

}

export default Footer;