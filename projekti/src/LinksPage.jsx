const LinksPage = (props) => {
    let kayttaja_id = 0;
    let kayttaja = '';
    let freimi_id = 0;
    let freimi = '';
    if(props.kayttaja) {
        kayttaja = props.kayttaja;
    }
    if(props.freimi) {
        freimi = props.freimi;
    }
    return (
        <>
        <hr />
        <p />
        Teksti 1 {kayttaja}{freimi}
        <p />
        Teksti 2
        </>
    )
}

export default LinksPage