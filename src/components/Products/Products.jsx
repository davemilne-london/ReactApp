import React, {useState} from "react";
import "./Products.css";


const ProductHeader = (props) => {
    return (
        <tr>
            <th colspan="2">{props.product.category}</th>
        </tr>
    )
}

const ProductRow = (props) => {

    return (
        <tr className={props.product.stocked ? "stocked" : "unstocked"}>
            <td>{props.product.name}</td>
            <td>{props.product.price}</td>
        </tr>
    )
}

const ProductTable = (props) => {

    const rows = [];
    let lastCategory = null;
    for (var product of props.products) {

        if (product.name.toLowerCase().indexOf(props.filterText.toLowerCase()) === -1) {
            continue;
        }
        if (props.inStockOnly && !product.stocked) {
            continue;
        }

        if (product.category != lastCategory) {
            rows.push(<ProductHeader product = {product}/>)
        }
        rows.push(<ProductRow product = {product}/>)
        
        lastCategory = product.category;
    }

    return(
        <table>
            <tr>
                <th>Name</th>
                <th>Price</th>
            </tr>
            {rows}
        </table>
    )
}


const SearchBar = (props) => {
    
    return(
        <div id="divSearchBar">
            <input type="text" placeholder="Search..." onChange={props.onTextChange}/>
            <div>
                <input type="checkbox" id="chkProducts" onClick={props.onStockChange}/>
                <label for="chkProducts">Only show products in stock</label>
            </div>            
        </div>
    )
}

const FilterableProductTable = (props) => {

    const [filterText, setFilterText] = useState('');
    const [inStockOnly, setInStockOnly] = useState(false);

    return (
        <div id="divProductTable">
            <SearchBar 
                filterText={filterText} 
                inStockOnly={inStockOnly} 
                onStockChange={(e) => setInStockOnly(e.target.checked)}
                onTextChange={(e) => setFilterText(e.target.value)}
            />
            <ProductTable products={props.products} filterText={filterText} inStockOnly={inStockOnly}/>
        </div>
    );    
}

export default FilterableProductTable;

 
