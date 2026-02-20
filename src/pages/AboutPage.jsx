export default function AboutPage() {
  return (
    <section className="container">
      <section className="homepage row align-items-end justify-content-end ">
        <div className="col-12 col-md-6">
          <img className="img-fluid" src="public/img/shopping_spree.jpg" alt="shopping_spree" />
        </div>
        <div className="col-12 col-md-6 align-self-center">
          <h1>Chi Siamo</h1>
          <p>
            Teacher, Tutor, Teacher Coordinator, Career Coach, Admission Advisor: oltre 70 persone ogni giorno lavorano in Boolean per trasformare appassionati di tecnologia con tanta voglia di
            imparare in professionisti del settore. Ci riusciamo davvero? Sì! Più del 95% dei nostri studenti inizia la sua carriera entro 6 mesi dalla fine del corso.
          </p>
        </div>
      </section>
      <section className="row">
        <div className="col-12 card my-3">
          <h2 className="m-3">La nostra missione</h2>
          <p>
            Vogliamo rendere la formazione in ambito tech più accessibile e smart, dando la possibilità a ognuno di dare una svolta alla propria carriera, anche partendo da zero. Ogni giorno ci
            impegniamo per continuare a sviluppare e migliorare un metodo di insegnamento che permetta alle persone di imparare in breve tempo nozioni complete, concrete e specifiche.
          </p>
        </div>
        <div className="col-12 card my-3">
          <h2 className="m-3">I nostri valori</h2>
          <div className="row">
            <div className="col-6">
              <h3 className="m-4">Qualità</h3>
              <p>La nostra è un’esperienza formativa di alto livello, seria e professionalizzante. Scegliamo con attenzione i nostri insegnanti e offriamo un programma intenso e completo.</p>
            </div>
            <div className="col-6">
              <h3 className="m-4">Concretezza</h3>
              <p>La facciamo facile e la facciamo pratica: abbiamo un approccio diretto che mira all’efficacia. Con il nostro metodo aiutiamo gli studenti a dare una svolta reale alla loro vita.</p>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
