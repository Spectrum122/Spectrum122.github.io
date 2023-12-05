const {MongoClient} = require('mongodb')

const client = new MongoClient('mongodb+srv://Spectrum:s7OYpaYjXlU2FRXO@cluster0.v0lsvnt.mongodb.net/Secret-Santa?retryWrites=true&w=majority')
//later

const start = async () =>{
    try{
        await client.connect()
        console.log('Соеденение норм')
        await client.db().createCollection('users')
        const users = client.db().collection('users')
        await users.insertMany( [  { name: 'Рауза', password: '123456' },
      { name: 'Инкара', password: '234567' },
      { name: 'Дамир', password: '345678' },
      { name: 'Уаис', password: '456789' },
      { name: 'Жанторе', password: '567890' },
      { name: 'Нурмух', password: '678901' },
      { name: 'Ермух', password: '789012' },
      { name: 'Айым', password: '890123' },
      { name: 'Райана', password: '901234' },
      { name: 'Чина', password: '012345' },
      { name: 'Ануар', password: '135790' },
      { name: 'Димаш Т', password: '246801' },
      { name: 'Димаш А', password: '357912' },
      { name: 'Айлана', password: '468123' },
      { name: 'Алан', password: '579234' },
      { name: 'Каусар', password: '690345' },
      { name: 'Дария', password: '901456' },
      { name: 'Арнай', password: '012567' },
      { name: 'Расул', password: '123678' },
      { name: 'Бекболат', password: '234789' },
      { name: 'Айша', password: '345890' },
      { name: 'Ансар', password: '456901' },
      { name: 'Акбота', password: '567012' },
      { name: 'Али', password: '678123' },
      { name: 'Алемжан', password: '789234' }])
      const user = await users.findOne({name: 'Али'})
      console.log(user)
    }
    catch(e){
        alert(e)
    }
}

start()