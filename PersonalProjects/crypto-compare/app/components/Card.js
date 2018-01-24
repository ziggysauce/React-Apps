import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styles from '../styles/card.scss';

class Card extends Component {
  constructor() {
		super();
		this.state = {
      coin: [{}, {}, {}, {}, {}, {}, {}, {}],
      loaded: false
    };
  }
  
  componentDidMount() {
    fetch('https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,ETH,LTC,XRP,DASH,XMR,XEM,BCH&tsyms=USD')
    .then(results => {
      return results.json();
    }).then(data => {      
      let exchange = [];
      const coinType = ['BTC', 'ETH', 'LTC', 'XRP', 'DASH', 'XMR', 'XEM', 'BCH'];
      
      coinType.forEach((type) => {
        exchange.push({
          'coin': data['DISPLAY'][`${type}`]['USD']['FROMSYMBOL'],
          'price': data['DISPLAY'][`${type}`]['USD']['PRICE'],
          'percent': data['DISPLAY'][`${type}`]['USD']['CHANGEPCT24HOUR'],
        });
      });

      // console.log(exchange);

      this.setState({
        loaded: true,
        coin: exchange
      });
    })
    .catch(error => console.log('Error: ', error));
  }
	
  render() {
		return (
			<div className="card-container">
				<div className="card">
          <img src="../img/btc.png" />
          <div className="coin-data">
            <p>Bitcoin (BTC)</p>
            <p>{this.state.coin[0]['price']}</p>
            <p className={"" + (Number(this.state.coin[0]['percent']) >= 0 ? "pos" : "neg")}>{this.state.coin[0]['percent']}%</p>
          </div>
        </div>
        <div className="card">
          <img src="../img/eth.png" />
          <div className="coin-data">
            <p>Ethereum (ETH)</p>
            <p>{this.state.coin[1]['price']}</p>
            <p className={"" + (Number(this.state.coin[1]['percent']) >= 0 ? "pos" : "neg")}>{this.state.coin[1]['percent']}%</p>
          </div>
        </div>
				<div className="card">
          <img src="../img/ltc.png" />
          <div className="coin-data">
            <p>Litecoin (LTC)</p>
            <p>{this.state.coin[2]['price']}</p>
            <p className={"" + (Number(this.state.coin[2]['percent']) >= 0 ? "pos" : "neg")}>{this.state.coin[2]['percent']}%</p>
          </div>
        </div>
				<div className="card">
          <img src="../img/xrp.png" />
          <div className="coin-data">
            <p>Ripple (XRP)</p>
            <p>{this.state.coin[3]['price']}</p>
            <p className={"" + (Number(this.state.coin[3]['percent']) >= 0 ? "pos" : "neg")}>{this.state.coin[3]['percent']}%</p>
          </div>
        </div>
				<div className="card">
          <img src="../img/dash.png" />
          <div className="coin-data">
            <p>DigitalCash (DASH)</p>
            <p>{this.state.coin[4]['price']}</p>
            <p className={"" + (Number(this.state.coin[4]['percent']) >= 0 ? "pos" : "neg")}>{this.state.coin[4]['percent']}%</p>
          </div>
        </div>
				<div className="card">
          <img src="../img/xmr.png" />
          <div className="coin-data">
            <p>Monero (XMR)</p>
            <p>{this.state.coin[5]['price']}</p>
            <p className={"" + (Number(this.state.coin[5]['percent']) >= 0 ? "pos" : "neg")}>{this.state.coin[5]['percent']}%</p>
          </div>
        </div>
				<div className="card">
          <img src="../img/xem.png" />
          <div className="coin-data">
            <p>NEM (XEM)</p>
            <p>{this.state.coin[6]['price']}</p>
            <p className={"" + (Number(this.state.coin[6]['percent']) >= 0 ? "pos" : "neg")}>{this.state.coin[6]['percent']}%</p>
          </div>
        </div>
				<div className="card">
          <img src="../img/bch.png" />
          <div className="coin-data">
            <p>Bitcoin Cash (BCH)</p>
            <p>{this.state.coin[7]['price']}</p>
            <p className={"" + (Number(this.state.coin[7]['percent']) >= 0 ? "pos" : "neg")}>{this.state.coin[7]['percent']}%</p>
          </div>
        </div>
			</div>
		);
  }
}

export default Card;




// API DATA URL: https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,ETH,LTC,XRP,DASH,XMR,XEM,BCH&tsyms=USD