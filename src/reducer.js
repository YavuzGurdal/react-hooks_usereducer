export const reducer = (state, action) => { // iki parametre alir. state ve action

    switch (action.type) {

        case "FETCH_START": // api den verilerin alinmaya basladigi an. action.type "FETCH_START"
            return { ...state, data: "", loading: true, error: "" }; // state bu veriler ile guncelliyoruz

        case "FETCH_SUCCESS": // api den verilerin alinmasi basarili oldugu an. action.type "FETCH_SUCCESS"
            return { ...state, loading: false, data: action.payload };
        // app.js icinde axios la aldigimiz kopek resmini payloada atamistik. 
        // burda da data ya payload olarak gonderdigimiz kopek resmini atadik

        case "FETCH_ERROR": // api den verilerin alinmasi basarisiz oldugu an. action.type "FETCH_ERROR"
            return { ...state, loading: false, error: action.payload };
        // app.js icinde payload a arror mesaj gonderdik. 
        // burda da payload olarak gonderdigimiz error mesajı atamis olduk

        default: // yukardakilerin hicbiri calismazsa state aynen geri donecek
            return state;
    }
};