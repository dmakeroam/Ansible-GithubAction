#!/bin/bash
export ANSIBLE_ROLES_PATH="roles"
export ANSIBLE_HOST_KEY_CHECKING=False
ansible-playbook -i inventories/dev playbooks/hello-world.yaml -e ansible_become_pass='Kim0927755452' -vvvv