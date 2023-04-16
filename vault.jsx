import { useState } from 'react'
import './App.css'


export default function Vault() {
    const [count, setCount] = useState(0)
    return (
      <div className="App">
        <header>
            <div class = "">
            <a href='/'><img src="https://github.com/Jun1on/Bai-Supply/blob/main/graphics/text.png?raw=true" alt="Logo" className="left-header-logo" /></a>
            <ul>
          <li><a href='/'><img src="https://github.com/Jun1on/Bai-Supply/blob/main/graphics/text.png?raw=true" alt="Logo" className="left-header-logo" /></a></li>
          <li><a href='/vaults'><button class ="navigation-bar">Vaults</button></a></li>
          <li><a href='/swap'><button class ="navigation-bar">Swap</button></a></li> 
          <li><a href='/stake'><button class ="navigation-bar">Stake</button></a></li>
          <li><a href='/about'><button class ="navigation-bar">About</button></a></li>

        </ul>

            <div className = "right-header-button">
            <a href='https://sepolia.etherscan.io/address/0x13a40248160677c7cf932262813806dd0ea797ce#writeContract'><button>Connect Wallet</button></a>

            </div>
        </div>
        </header>

        <div className = "head">
            Vaults Overview
        </div>


        <div className = "bolded-text">Create New Vault</div>
 
        <div className = "left">
            <div id="rcorners2">
                 <img src="https://github.com/Jun1on/Bai-Supply/blob/main/graphics/Logo.png?raw=true" className="bottom-logo" alt="Vite logo" />
                <p class="text">BAI</p>
                <div class="flex gap-7 px-5 items-center w-full h-full p-5">
                    <div className = "left">
                        Minimum Collateral <br/>Repayment Fee <br/> Deposit Fee <br />Minimum Debt <br/> Avaliable VOLT  
                        <div className = "margin"></div>
                        <a href='https://sepolia.etherscan.io/address/0x13a40248160677c7cf932262813806dd0ea797ce#writeContract'><button class = "gradient-button">Create Vault</button></a>
                    </div>
                    
                    <div className = "right">
                        150% <br/>0.5% <br/>0% <br/>0 VOLT <br/>672.54 VOLT
                    </div>
                </div>
                



            </div>
            <div id="rcorners2">
            
            <img src="https://s2.coinmarketcap.com/static/img/coins/200x200/15027.png" className="bottom-logo" alt="Vite logo" />
            <p class="text">CAR</p>
            <div className = "left">
                Minimum Collateral <br/>Repayment Fee <br/> Deposit Fee <br />Minimum Debt <br/> Avaliable VOLT  <br/>
                <div className = "margin"></div>
                <a href='https://sepolia.etherscan.io/address/0x13a40248160677c7cf932262813806dd0ea797ce#writeContract'><button class = "gradient-button">Create Vault</button></a>
            </div>
            
            <div className = "right">
                150% <br/>0.5% <br/>0% <br/>0 VOLT <br/>12563.56 VOLT
            </div>
              
            </div>
        </div>
        
      </div>
      
        
    )
}


