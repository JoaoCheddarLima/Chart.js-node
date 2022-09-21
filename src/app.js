//caso não habilite o importe no package, utilize require('')
import { ChartJSNodeCanvas  } from 'chartjs-node-canvas'
import fs from 'fs'

//criar canvas
let [width, height, color] = [300, 300, 'white']
let canvas = new ChartJSNodeCanvas({width, height,color})

//criar grafico
let description = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta']
let acidentes = [2, 5, 1, 7, 12] 
let tipograf = 'line'

//como vai ser seu grafico, cores dados etc, consulte a documentação oficial
const data = {
    labels: description,
    datasets: [{
      label: 'acidentes nesta semana',
      data: acidentes,
      fill: false,
      borderColor: 'rgb(255, 90, 90)',
      tension: 1
    }]
  };

//definir o grafico com dados e tipo
const config = {
    type: tipograf,
    data: data,
  };

//renderizar o grafico no canvas criado anteriormente, aqui você faz do seu jeito de acordo com suas necessidades
let genLink = async () => {
    let link = canvas.renderToDataURLSync(config)
    fs.writeFileSync('./link.txt', link)
}
genLink()
