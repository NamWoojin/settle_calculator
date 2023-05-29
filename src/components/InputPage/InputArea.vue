<template>
    <div class="input-area">
        <input class="name-input" type="text">
        <input class="money-input" type="number">
        <button class="add-button">추가</button>
    </div>
</template>
<style scoped>
.input-area{
    width:100%;
    height:30px;
    display: flex;
    align-items: center;
    justify-content: center;
}
input{
    border:0px;
    border-bottom: 2px solid rgb(255, 210, 196);
    background: none;
    margin:3px 6px;
    height:1.7rem;
}
input:focus,
input:active{
    border:none;
}
.name-input{
    width:25%;
}
.money-input{
    width:50%;
}
.add-button{
    width:15%;
    margin-left:3px;
    background: rgb(130, 174, 255);
    font-weight: 600;
    color: white;
    border:none;
    border-radius: 6px;
    height:2rem;
    cursor: pointer;
}
</style>