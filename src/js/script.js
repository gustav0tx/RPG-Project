class char{
    constructor(name){
        this.name = name
    }
}

class human extends char{
    constructor(name, species, type){
        super(name)
        this.species = species
        this.type = type
    }
}
class orch extends char{
    constructor(name, species, type){
        super(name)
        this.species = species
        this.type = type
    }
}
class elf extends char{
    constructor(name, species, type){
        super(name)
        this.species = species
        this.type = type
    }
}
class fairy extends char{
    constructor(name, species, type){
        super(name)
        this.species = species
        this.type = type
    }
}

const btn = document.getElementById('create')
btn.addEventListener('click', () => {
    const species = document.getElementById('species').value
    const name = document.getElementById('name').value
    const type = document.getElementById('type').value
    
    let perso = null
    switch(species){
        case 'human':
            perso = new human(name, species, type)
            break    
        case 'orch':
            perso = new orch(name, species, type)
            break    
        case 'elf':
            perso = new elf(name, species, type)
            break    
        case 'fairy':
            perso = new fairy(name, species, type)
            break    
    }
    
    const menu  = document.getElementById('menu')
    
    const pName = document.createElement('p')
    pName.innerText = `${perso.name}    `
    
    const pSpecie = document.createElement('p')
    pSpecie.innerText = `${perso.species}`
    
    const pType = document.createElement('p')
    pType.innerText = `${perso.type}`
    
    const result = document.createElement('div')
    result.className = 'flex flex-col'
    result.id = 'result'

    if(!document.getElementById('result')){
        result.append(pName, pSpecie, pType)
        menu.append(result)
    } else{
        document.getElementById('result').remove()
    }
})