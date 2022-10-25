import ItemList from "../components/ItemList";

const ItemListContainer = () => {
    return (
        <>
        <h1>holiiiis</h1>
        <div className="container d-flex row-cols-1 justify-content-center allign-items-center">
            <div className="row">
                <div className="col-md-4">
                <ItemList/>
                </div>
                <div className="col-md-4">
                <ItemList/>
                </div>
                <div className="col-md-4">
                <ItemList/>
                </div>
                <div className="col-md-4">
                <ItemList/>
                </div>
                <div className="col-md-4">
                <ItemList/>
                </div>
                <div className="col-md-4">
                <ItemList/>
                </div>
            </div>
        </div>
        
        </>
    );
}
export default ItemListContainer;