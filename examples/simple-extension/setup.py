import os
import subprocess
import sys
from setuptools import find_packages, setup
from setuptools.command.test import test as TestCommand
from setuptools_rust import RustExtension

class PyTest(TestCommand):
    user_options = []
    def run(self):
        self.run_command("test_rust")
        import subprocess
        errno = subprocess.call(['pytest', 'tests'])
        raise SystemExit(errno)


setup_requires = ['setuptools-rust>=0.6.0']
install_requires = ['numpy']
test_requires = install_requires + ['pytest']

setup(
    name='rust_ext',
    version='0.1.0',
    description='Example of python-extension using rust-numpy',
    rust_extensions=[RustExtension('rust_ext.rust_ext', './Cargo.toml')],
    install_requires=install_requires,
    setup_requires=setup_requires,
    test_requires=test_requires,
    packages=find_packages(),
    zip_safe=False,
    cmdclass=dict(test=PyTest)
)