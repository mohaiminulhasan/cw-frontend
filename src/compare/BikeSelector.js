import React from 'react';

class BikeSelector extends React.Component {
    state = {
        modelDisabled : true,
        variantDisabled : true,
        models : [],
        variants : [],

        brand : '',
        model : '',
        variant : ''
    }

    handleBrandChange = (brand, e) => {
        if (e.target.value === '') {
            this.setState({ modelDisabled : true, variantDisabled : true })
        } else {
            fetch(`http://45.248.149.94:8000/api/brands/${brand}/models/`)
                .then(response => response.json())
                .then(models => this.setState({ models }))
                .then(this.setState({ modelDisabled : false, variantDisabled : true, brand : brand }))
        }
    }

    handleModelChange = (model, e) => {
        if (e.target.value === '') {
            this.setState({ variantDisabled : true })
        } else {
            fetch(`http://45.248.149.94:8000/api/brands/${this.state.brand}/models/${model}/variants/`)
                .then(response => response.json())
                .then(variants => this.setState({ variants }))
                .then(this.setState({ variantDisabled : false, model : model }))
        }
    }

    handleVariantChange = (column, e) => {
        // this.props.setData(column, this.state.brand, this.state.model, e.target.value);
        this.props.getVehicleId(column, this.state.brand, this.state.model, e.target.value);
    }

    render() {
        const { brands } = this.props;
        const { models, variants } = this.state;
        const { modelDisabled, variantDisabled } = this.state;
        
        return (
            <td>
                <select className="form-control" onChange={ (e) => this.handleBrandChange(e.target.value, e) }>
                    <option value=''>Brand</option>
                    {brands.map(
                        (item) => (<option key={ item.id } value={ item.slug }>{ item.name }</option>)
                    )}
                </select> <br/>
                <select className="form-control" onChange={ (e) => this.handleModelChange(e.target.value, e) } disabled={modelDisabled}>
                    <option value=''>Model</option>
                    {models.map(
                        (item) => (<option key={ item.id } value={ item.slug }>{ item.name }</option>)
                    )}
                </select> <br/>
                <select className="form-control" onChange={ (e) => this.handleVariantChange(this.props.column, e) } disabled={variantDisabled}>
                    <option value=''>Variant</option>
                    {variants.map(
                        (item) => (<option key={ item.id } value={ item.slug }>{ item.name }</option>)
                    )}
                </select>
            </td>
        );
    }
}

export default BikeSelector;