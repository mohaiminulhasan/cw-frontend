import React from 'react';

class CompareTable extends React.Component {
    isEmpty(obj) {
        for(var key in obj) {
            if(obj.hasOwnProperty(key))
                return false;
        }
        return true;
    }

    render() {
        const { a_data, b_data, c_data } = this.props;
        const data = [a_data, b_data, c_data];

        return (
            <table className="table table-responsive">
            <tbody>
                <tr>
                    <td></td>
                    {this.isEmpty(a_data) ? null : <th><a href={`/${a_data.id}`}>{a_data.variant}</a></th>}
                    {this.isEmpty(b_data) ? null : <th><a href={`/${b_data.id}`}>{b_data.variant}</a></th>}
                    {this.isEmpty(c_data) ? null : <th><a href={`/${c_data.id}`}>{c_data.variant}</a></th>}
                </tr>

                <tr>
                    <td></td>
                    {this.isEmpty(a_data) ? null : <td><img src={a_data.image} alt="Vehicle." width="250" /></td>}
                    {this.isEmpty(b_data) ? null : <td><img src={b_data.image} alt="Vehicle." width="250" /></td>}
                    {this.isEmpty(c_data) ? null : <td><img src={c_data.image} alt="Vehicle." width="250" /></td>}
                </tr>

                <tr>
                    <th className="text-left">Brand</th>
                    {data.map(el => this.isEmpty(el) ? null : <td key={el.id}>{ el.brand }</td>)}
                </tr>

                <tr>
                    <th className="text-left">Model</th>
                    {data.map(el => this.isEmpty(el) ? null : <td key={el.id}>{ el.model }</td>)}
                </tr>

                <tr>
                    <th className="text-left">Variant</th>
                    {data.map(el => this.isEmpty(el) ? null : <td key={el.id}>{ el.variant }</td>)}
                </tr>

                <tr>
                    <th className="text-left">Country</th>
                    {data.map(el => this.isEmpty(el) ? null : <td key={el.id}>{ el.country }</td>)}
                </tr>

                <tr>
                    <th className="text-left">Drive Option</th>
                    {data.map(el => this.isEmpty(el) ? null : <td key={el.id}>{ el.drive_option }</td>)}
                </tr>

                <tr>
                    <th className="text-left">Fuel Type</th>
                    {data.map(el => this.isEmpty(el) ? null : <td key={el.id}>{ el.fuel }</td>)}
                </tr>

                <tr>
                    <th className="text-left">Fuel Consumption</th>
                    {data.map(el => this.isEmpty(el) ? null : <td key={el.id}>{ el.fuel_consumption }</td>)}
                </tr>

                <tr>
                    <th className="text-left">Displacement</th>
                    {data.map(el => this.isEmpty(el) ? null : <td key={el.id}>{ el.displacement }</td>)}
                </tr>

                <tr>
                    <th className="text-left">Power</th>
                    {data.map(el => this.isEmpty(el) ? null : <td key={el.id}>{ el.power }</td>)}
                </tr>

                <tr>
                    <th className="text-left">Length</th>
                    {data.map(el => this.isEmpty(el) ? null : <td key={el.id}>{ el.length }</td>)}
                </tr>

                <tr>
                    <th className="text-left">Width</th>
                    {data.map(el => this.isEmpty(el) ? null : <td key={el.id}>{ el.width }</td>)}
                </tr>

                <tr>
                    <th className="text-left">Height</th>
                    {data.map(el => this.isEmpty(el) ? null : <td key={el.id}>{ el.height }</td>)}
                </tr>

                <tr>
                    <th className="text-left">Ground Clearance</th>
                    {data.map(el => this.isEmpty(el) ? null : <td key={el.id}>{ el.ground_clearance }</td>)}
                </tr>

                <tr>
                    <th className="text-left">Seats</th>
                    {data.map(el => this.isEmpty(el) ? null : <td key={el.id}>{ el.seats }</td>)}
                </tr>

                <tr>
                    <th className="text-left">Price</th>
                    {data.map(el => this.isEmpty(el) ? null : <td key={el.id}>{ el.price }</td>)}
                </tr>
            </tbody>
            </table>
        );
    }
}

export default CompareTable;