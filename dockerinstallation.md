# Installation of docker on Linux

Installation of docker can be done by executing the Docker's offical instllation script maintained by docker inc.

```bash
curl -fsSL https://get.docker.com -o dockerinstall && chmod +x dockerinstall && ./dockerinstall
```
Explanation:
  - curl is used to get some information from the internet(that is transfer of data via http,https and many other protocols)
  - -f: Fail silently on HTTP errors (e.g., 404, 403). It prevents outputting HTML error pages.
  - -s: Silent mode — suppresses progress meter and error messages.
  - -S: Show errors, but only if -s is used. So, it keeps output clean unless something goes wrong.
  - -L: Follow redirects. This ensures curl will follow any HTTP redirection from the URL.
  - https://get.docker.com: The URL of Docker's official installation script.
  - -o dockerinstall: Save the output to a file named dockerinstall.
  - chmod: Change file permissions.
  - +x: Add executable permission.
  - dockerinstall: The file you just downloaded.
  - ./: Run a script or binary in the current directory.
  - dockerinstall: The script you just downloaded and made executable.

## What Gets Installed (via get.docker.com)
1. Docker Engine (Full Docker daemon)
dockerd: The Docker daemon — responsible for running containers.

Configured as a systemd service (docker.service).

2. Docker CLI
The docker command — the CLI tool you use to interact with the Docker daemon.

3. Supporting Components
containerd: A runtime used by Docker to manage containers.

runc: The actual container runtime (low-level process executor).

docker-init: A minimal init system used in containers (optional).

Systemd service files (docker.service, containerd.service).

4. Docker Group
A docker group is created (if it doesn't already exist) so that non-root users can run Docker (if added to the group).

