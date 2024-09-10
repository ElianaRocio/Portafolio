
import Menu from "../../components/Menu/Menu";
import Form from "../../components/Form/Form";
import Testimonios from "../../components/Testimonios/Testimonios";
import Premio from "../../components/Premio/Premio";
import Image1 from "../../components/Image1/Image1";
import Image2 from "../../components/Image2/Image2";
import Image3 from "../../components/Image3/Image3";
import persona1 from "../../assets/images/persona1.png";
import persona2 from "../../assets/images/persona2.png";
import persona3 from "../../assets/images/persona3.png";
import Datos from "../../components/Datos/Datos"
import Presentacion from "../../components/Presentacion/Presentacion";

export default function AboutPage() {

    let lugar = [
        {
            titulo: 'Magic Kingdom',
            texto: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ',
        },
    ];
    let lugar1 = [
        {
            titulo: 'Legoland',
            texto: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ',
        },
    ];

    let lugar2 = [
        {
            titulo: 'Wizarding World',
            texto: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ',
        },
    ];

    let test1 = [
        {
            titulo: 'Charlie',
            texto: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ',
        },
    ];
    let test2 = [
        {
            titulo: 'Joaquin',
            texto: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ',
        },
    ];
    let test3 = [
        {
            titulo: 'Riley',
            texto: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ',
        },
    ];


    return (
      <>
       
        <Presentacion />
        <Menu />

        

        

       
      </>
    );
}