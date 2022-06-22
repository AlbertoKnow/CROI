import { AnnotationIcon, GlobeAltIcon, LightningBoltIcon, ScaleIcon } from '@heroicons/react/outline'
import ComoInvertir from '../../components/nosotros/como_invertir'
import ModeloCroi from '../../components/nosotros/modelo_croi'
import AcercaDe from '../../components/nosotros/acerca_de'
import ComoFunciona from '../../components/nosotros/como_funcion'
import PorqueInvertir from '../../components/nosotros/porque_invertir'
import PorqueFinanciarseConCroi from '../../components/nosotros/porque_financiarse_con_croi'
import Footer from '../../components/footer';
import Header from '../../components/header';

export default function Example() {
  return (
    <div className="bg-white">
      <Header />
      <AcercaDe />
      <PorqueFinanciarseConCroi/>  
      <PorqueInvertir/>  
      <ComoFunciona/>
      <ModeloCroi />
      <ComoInvertir />  
      <Footer />
    </div>
  )
}