### Diplomatura AACSyA 2018 - FaMAF - UNC
# Análisis y Visualización de Datos


## Requisitos de Instalación

Hay dos manejadores principales de paquetes para Python: conda y pip. Para este curso les recomendamos usar conda, ya que funciona también como un manejador de entornos (como virtualenv). Además de ello, las notebooks estarán escritas para Python 3.

Para configurar el entorno de trabajo con jupyter y todas las herramientas necesarias para este curso, pueden ejecutar los siguientes comandos (Unix):

```
$ wget https://repo.anaconda.com/archive/Anaconda3-2018.12-Linux-x86_64.sh
$ bash Anaconda3-2018.12-Linux-x86_64.sh
$ source ~/.bashrc
$ conda create --name diplodatos python=3.6 anaconda
$ source activate diplodatos
```

Instrucciones más completas [aquí](https://www.digitalocean.com/community/tutorials/how-to-install-anaconda-on-ubuntu-18-04-quickstart) cortesía de Digital Ocean. 

Si ya tenían conda instalado, comprueben que la versión instala seaborn 0.9 y no la 0.8, que a pesar de no ser un major release tiene varios major changes que hacen que los ejemplos de Internet. Ej: catplot (0.9) vs factorplot (0.8). Instalar manualmente seaborn 0.9 hace que, en algunas distribuciones, se rompa jupyter, así que en ese caso les recomendamos que i) reinstalen anaconda o ii) usen seaborn 0.8 directamente.

Una vez que hayan activado el environment y clonado este repositorio, en este mismo directorio pueden ejecutar jupyter para abrir las notebooks:

```
$ jupyter notebook
```

Si prefieren utilizar otro manejador de paquetes distinto de conda, las librerías que utilizaremos son:

* matplotlib
* numpy
* pandas
* seaborn

### Opcionales

Las siguientes librerías son necesarias para correr los ejemplos con R:

```
$ conda install -c r r-essentials rpy2
```

## Datasets

Los datasets con los que estaremos trabajando se encuentran en https://drive.google.com/drive/folders/1yDFFyIiEf6wbA8LE7bVEBXBuz8Fq4dlv?usp=sharing. No todos son necesarios, la mayoría los usamos sólo en ejemplos.

