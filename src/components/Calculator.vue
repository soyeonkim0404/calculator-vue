<template>
    <main>
        <input type="text" readonly v-model="current"/>
        <div class="button-wrap">        
            <button @click="clear" class="ac">AC</button>            
            <button @click="operator('/')">/</button>
            <button @click="number('7')">7</button>
            <button @click="number('8')">8</button>
            <button @click="number('9')">9</button>
            <button @click="operator('*')">*</button>
            <button @click="number('4')">4</button>
            <button @click="number('5')">5</button>
            <button @click="number('6')">6</button>
            <button @click="operator('-')">-</button>
            <button @click="number('1')">1</button>
            <button @click="number('2')">2</button>
            <button @click="number('3')">3</button>
            <button @click="operator('+')">+</button>            
            <button @click="number('0')" class="zero">0</button>            
            <button @click="dot('.')">.</button>
            <button @click="compute">=</button>
        </div>
    </main>
</template>

<script>
    export default {
        data(){
            return{
                current : '',
                operatorChked : true,
                computeChked : false,
            }
        },
        methods:{   
            clear(){
                this.current = '';
                this.operatorChked = true;
            },
            operator(e){
                if(this.operatorChked) return false;
                if(this.computeChked){
                    this.computeChked = false;
                }
                this.current += e;
                return this.operatorChked = true;
            },
            number(n){
                if(this.computeChked){
                    this.current = n;
                    this.computeChked = false;
                }else{
                    this.current += n;
                }
                this.operatorChked = false;
            },
            dot(e){
                this.current += e;
            },
            compute(){
                if(this.operatorChked) return;
                this.current = eval(this.current);
                this.computeChked = true;
            }
        }
    }
</script>

<style scoped>
* { box-sizing: border-box; color: white; } 
main { width: 300px;} 
.button-wrap { display: grid;grid-template-columns: repeat(4, 1fr); } 
input, button { height: 70px; outline: none; } 
input { width: 100%; text-align: right; border: none;background: #5B5B5D; padding-right: 1rem; font-size: 3rem; } button {background: #828284; border: 1px solid #454448; font-size: 2rem; }
button:nth-child(4n+2), button:last-child { background-color: orange; }
button:hover { opacity: .5; } 
.ac {grid-column: 1/4; background: #6A6A6C; } 
.zero {grid-column: 1/3; }
</style>