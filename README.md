**Activate the virtual enviroment**

log in virtual enviroment:

``` source .env/Scripts/activate ```

disconnect virtual enviroment:
```
deactivate
```

**Install all packages**
```
pip install -r requirements.txt 
```

**Run the tests**

Make sure to activate the virtual enviroment.

```
python -m pytest backend/tests
```

**Run the application and API**
Make sure you activate the virtual enviroment.

```
python -m backend.app
```

**Run a peer instance**

Make sure you activate the virtual enviroment.

```
export PEER=True && python -m backend.app
```

**Run the Frontend**

In the frontend directory:

```
npm run start
```

**Seed the backend with data**

Make sure you activate the virtual enviroment.

```
export SEED_DATA=True && python -m backend.app
```