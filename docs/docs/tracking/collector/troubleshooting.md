---
sidebar_position: 3
---

# Troubleshooting 


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## I get a FetchTransport error in the browser console
If you see this error for tracking calls, the Collector probably didn't start correctly, or cannot listen on 
the specified port.

1. Go to `http://localhost:[PORT]/schema` (e.g. [http://localhost:8081/schema](http://localhost:8081/schema)) 
and verify you see the schema.
1. If you don't, go to `http://localhost:[PORT]/` (e.g. [http://localhost:8081/](http://localhost:8081/)) and 
verify you see a a `Method not allowed` message or a `500` error message.
1. If not, let's check the Collector logs for clues, and resolve any issues you see in there.
  ```bash
  docker logs objectiv_collector
  ```
1. If the logs don't yield any clues, it's possible that the cannot listen on the given port (by default 
port `8081`). Let's see if this is the case below.

<Tabs groupId="operating-systems">
  <TabItem value="linux" label="Linux">

```bash
sudo lsof -n -i :[PORT_NUMBER]
```

  </TabItem>
  <TabItem value="mac" label="MacOS">

```bash
netstat -an |grep [PORT_NUMBER]
```

  </TabItem>
  <TabItem value="windows" label="Windows">

```bash
netstat -aon | findstr :[PORT_NUMBER]
```

  </TabItem>
</Tabs>


:::info

On Linux the Collector will simply refuse to start if it cannot bind to the port. On Windows/Mac this is 
different, because the container is running in a VM. Getting the Collector to run on MacOS can also vary a 
bit depending on the OS version.

:::

Once you identify the application running on the same port, stop it, and restart the Collector.


## The Postgres container is not starting properly

The Postgres container tries to bind to port 5432 to enable local access. This won't work if something else is 
already using that port. To solve this, stop the application that's running on port 5432 (see previous 
section) and restart the Collector.


## My database changed and it no longer works
At the first start-up, Postgres will be initialised. This means a database will be created. As this is 
persisted on disk (in a docker volume), on subsequent startups, the persisted database will be loaded. In 
case of database changes, this may cause problems (as they are also persisted). 

To reset the database, simply do the following:
```bash
# stop the containers
docker-compose -f docker-compose-dev.yaml down
# remove the volume
docker volume rm objectiv-analytics_pgdata
# restart the containers
docker-compose -f docker-compose-dev.yaml up -d
```

:::info

The name of the docker volume that you remove in the example above, is determined by the directory from which 
the instance was started. So if your checkout dir is in fact objectiv-analytics, this is correct, otherwise 
you probably need to find the name of the volume first (`docker volume ls`), and remove that.

:::


## My issue is not listed here
Please get in touch with us via the options in the box below.
