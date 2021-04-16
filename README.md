# Análisis y Visualización de Datos #

## Diplomatura en Ciencia de Datos, Aprendizaje Automático y sus Aplicaciones - 2021

### Confguración del entorno ###

A lo largo de la diplomatura van a estar usando principalmente Python 3 ejecutado en *notebooks* interactivas. Existen muchas formas de configurar y ejecutar estas notebooks, les recomendamos trabajar inicialmente en el entorno virtual Colaboratory. Luego, cuando estén familiarizados con las herramientas, pueden pasar a un entorno local de [Jupyter](https://jupyter.org/).

#### Ejecución web - Colaboratory

Trabajar sobre el entorno local algunas veces no es posible. En particular, cuando no podemos instalar Jupyter localmente por problemas de versions o permisos, o cuando la cantidad de datos o cómputo excede nuestro hardware.

Les recomendamos usar Google Colaboratory para cargar y ejecutar notebooks en linea, disponible en `https://colab.research.google.com/notebook`. Por ejemplo, para abrir alguna de las notebooks de este repositorio, pueden ir a la pestaña `GitHub` y pegar la url de la notebook, por ejemplo, `https://github.com/DiploDatos/AnalisisyVisualizacion/blob/master/00_Leer_dataset.ipynb`. Esperen a que se cargue, y luego pueden abrirla.

Colaboratory permite modificar y ejecutar las notebooks, y les provee de suficientes recursos de hardware para la mayoría de las aplicaciones que van a encontrar durante toda la diplomatura, incluyendo GPUs.

Es importante notar que cuando modifiquen la notebook, sus cambios serán guardados en Drive, es decir, no afectan a la notebook guardada en github. Para trabajar sobre las notebooks de sus propios repositorios, pueden:

1. Utilizar la opción *Archivo -> Guardar una copia en GitHub*, ingresar sus credenciales y seleccionar su repositorio.
1. Descargar la notebook en formato `.ipynb` y subirla manualmente, o .

Ejecutar las cosas en la red tiene sus desventajas. La principal, y tal vez controversial, es permitir acceso al código y a los datos a una empresa externa, lo cual no siempre es posible con politicas de propiedad intelectual o privacidad de datos estrictas.


#### Entorno local

Cuando trabajamos con conjuntos de datos pequeños y una cantidad de cómputo razonable, lo más rápido es ejecutar la notebook en la máquina local. La primera razón es que no depende de la conexión a internet, y la segunda es la velocidad de ejecución. En general, durante todas las materias obligatorias de esta diplomatura van a poder trabajar localmente sobre un hardware relativamente moderno.

##### Conda

Les recomendamos instalar `conda` como manejador de paquetes de Python y manejador de entornos. Usaremos miniconda, que es una versión liviana de Anaconda, sin tantos paquetes previamente instalados.

* [Instrucciones para Windows](https://docs.conda.io/projects/conda/en/latest/user-guide/install/windows.html)
* [Instrucciones para Mac](https://docs.conda.io/projects/conda/en/latest/user-guide/install/macos.html)
* [Instrucciones para Linux](https://docs.conda.io/projects/conda/en/latest/user-guide/install/linux.html)

Si quieren algo más poderoso, pueden instalar Anaconda en lugar de miniconda, pero requiere más espacio en disco (3GB) y buena conexión a internet. Las instrucciones de instalación para los distintos sistemas operativos están en la [documentación oficial](https://docs.anaconda.com/anaconda/install/).

##### Conda env

Para mantener las versiones de los paquetes independientes, les recomendamos que creen un entorno o *environment* con conda, y lo usen durante toda la materia. Es posible que lo pudean re-utilizar para materias posteriores, pero si es necesario instalar distintas versiones de algunos paquetes, sólo tienen que crear un entorno nuevo y no pierden la configuración anterior. Adicionalmente, esto instalará algunos paquetes básicos para el uso de python.

    $ conda create --name diplodatos-ayvd python=3.6

Deben activar el entorno antes de poder utilizarlo. Esto será necesario cada vez que abran una consola nueva.

    $ conda activate diplodatos-ayvd


##### Jupyter Lab

Primero, abran una consola, activen el entorno de conda y naveguen hasta la carpeta donde clonaron este repositorio. Siguiendo nuevamente la [documentación oficial](https://jupyterlab.readthedocs.io/en/stable/getting_started/installation.html), pueden instalar JupyterLab directamente con conda desde su consola de preferencia o el Anaconda Prompt:

    $ conda install -c conda-forge jupyterlab
    $ conda install nb_conda_kernels

Para ejecutar JupyterLab, usen el comando:

    $ jupyter lab

esto abrirá una pestaña nueva en el navegador. Podrán ver los archivos presentes en el repositorio en la parte izquierda de la pantalla, o los archivos presentes en el directorio desde donde ejecutaron el comando anterior.

En caso de que el navegador no se abra automáticamente, pueden acceder al lab desde `http://localhost:8888/lab`. Para ingresar a la vista de notebooks tradicional de Jupyter pueden ir a `http://localhost:8888/tree`.

##### Paquetes necesarios

Tanto si usan conda como si usan otro manejador de paquetes, deben instalar los siguientes paquetes.

* pandas
* seaborn=0.11


### Profesores ###

Teórico con:
* Valeria Rulloni
* Milagro Teruel

Práctico con:
* Aldana González Montoro
* Georgina Flesia
* Nehuen González Montoro
* Mario Agustín Sgró

