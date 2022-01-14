import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import '../stylesheet/component/Carousel.css';
import InvestimensService from '../service/InvestmentsService.js'

const CustomCarousel = (props) => {

    const listOfOfertas = props.data;
    //listOfOfertas[0].MelhorOferta = "TRUE";
    
    return (
        <Carousel showArrows={true} showStatus={false} showIndicators={false}>
            {
                listOfOfertas.map((oferta)=>(
                    <a className='card' href="https://www.tesourodireto.com.br/titulos/precos-e-taxas.htm">
                        {
                            oferta.MelhorOferta == "TRUE" && (
                                <div className='melhor-oferta'>Melhor oferta</div>
                            )
                        }
                    <div className='card-desc'>
                        <><span className='title'>{oferta.TipoTitulo}</span>
                        <span className='desc'>Aplicação mínima: {oferta.aplicacaoMinima}</span>
                        <span className='desc'>Rentabilidade: {oferta.Rentabilidade}%</span>
                        <span className='desc'>Liquidez: {oferta.Liquidez}</span>
                        <span className='desc'>Validade: {oferta.DataVencimento}</span></>
                    </div>
                </a>
                ))
            }

        </Carousel>
    ) 
}
export default CustomCarousel