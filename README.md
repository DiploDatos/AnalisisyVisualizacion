### Diplomatura AACSyA 2018 - FaMAF - UNC
# Análisis y Visualización de Datos


## Requisitos de Instalación

Hay dos manejadores principales de paquetes para Python: conda y pip. Para este curso les recomendamos usar conda, ya que funciona también como un manejador de entornos (como virtualenv). Además de ello, las notebooks estarán escritas para Python 3.5.

Para configurar el entorno de trabajo con jupyter y todas las herramientas necesarias para este curso, pueden ejecutar los siguientes comandos:

```
$ wget https://repo.continuum.io/miniconda/Miniconda3-latest-Linux-x86_64.sh
$ bash Miniconda3-latest-Linux-x86_64.sh
$ conda create --name diplodatos-ayv python=3.5 numpy scipy jupyter nb_conda
$ source activate diplodatos-ayv
```

Una vez que hayan activado el environment y clonado este repositorio, en este mismo directorio pueden ejecutar jupyter para abrir las notebooks:

```
$ jupyter notebook
```

Si prefieren utilizar otro manejador de paquetes distinto de conda, las librerías que utilizaremos son:

* matplotlib
* numpy
* pandas
* seaborn

## Datasets

Los datasets con los que estaremos trabajando se encuentran en https://cs.famaf.unc.edu.ar/~mteruel/datasets/diplodatos. Son pequeños, pero si quieren pueden llevarlos previamente descargados.


