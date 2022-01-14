import React, { useEffect, useState } from 'react';
import CustomCarousel from '../component/Carousel';
import logo from '../image/porco-mepoupe.svg';
import '../stylesheet/pages/Home.css';
import InvestimensService from '../service/InvestmentsService.js'

const Home = () => {

    const [listOfertas, setListOferta] = useState([]);
    const [isLoading,setLoading] = useState(false)
    const loadOfertas = async () => {
        setLoading(true)
        try {
            const response = await InvestimensService.list();
            setListOferta(response.data.PrecoTaxaTesouroDireto);
        } catch {

            console.log("erro na chamada de api");
        }

        finally{
            setLoading(false)
        }
    }
    
    useEffect(()=>loadOfertas(),[])
 
    return (
        <div className="App">
            <div className='header'>
                <img className='logo-header' src={logo} alt="logo" />
                <span className='titulo-header'>Dicas de investimento</span>
            </div>
            <div className='wrapper-carousel'>
                {
                    !isLoading && (
                        <CustomCarousel data={listOfertas}></CustomCarousel>
                    )
                } 
                {
                    isLoading && (
                        <div>Loading</div>
                    )
                }
            </div>
        </div>
    )
}

export default Home